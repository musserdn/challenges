import dotenv from 'dotenv';
import express from 'express';
import type { Request, Response } from 'express';
import { OpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { z } from "zod";
import { StructuredOutputParser, OutputFixingParser } from 'langchain/output_parsers';

dotenv.config();

const port = process.env.PORT || 3001;
const apiKey = process.env.OPENAI_API_KEY;
let model: OpenAI;

// Check if the API key is defined
if (!apiKey) {
  console.error('OPENAI_API_KEY is not defined. Exiting...');
  process.exit(1);
}

const app = express();
app.use(express.json());

// TODO: Initialize the OpenAI model
if (apiKey) {
  model = new OpenAI({ temperature: 0, openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo' });
} else {
  console.error('OPENAI_API_KEY is not configured.');
}
// TODO: Define the parser for the structured output
const parser = StructuredOutputParser.fromNamesAndDescriptions({
  "day1": "Weather forecast for day 1",
  "day2": "Weather forecast for day 2",
  "day3": "Weather forecast for day 3",
  "day4": "Weather forecast for day 4",
  "day5": "Weather forecast for day 5",
});
// TODO: Get the format instructions from the parser
const formatInstructions = parser.getFormatInstructions();
// TODO: Define the prompt template
const promptTemplate = new PromptTemplate({
  template: "You really need to hype me up with a weather forecast that is accentuated by the voice of Crocodile Dundee for the city provided over the next 5 days.\n{format_instructions}\n{location}",
  inputVariables: ["location"],
  partialVariables: { format_instructions: formatInstructions }
});

const formatPrompt = async (location: string): Promise<string> => {
  return await promptTemplate.format({ location });
};

// Create a prompt function that takes the user input and passes it through the call method
const promptFunc = async (formattedPrompt: string): Promise<any> => {
  try {
    if (model) {
      const response = await model.invoke(formattedPrompt);
      // Assuming the model returns a JSON string, parse it
      return JSON.parse(response);
    }

    // Return a mock JSON object if the model is not available
    return {
      "Day 1": "Sunny, 25°C",
      "Day 2": "Cloudy, 22°C",
      "Day 3": "Rainy, 18°C",
      "Day 4": "Partly Cloudy, 20°C",
      "Day 5": "Sunny, 24°C"
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Endpoint to handle request
app.post('/forecast', async (req: Request, res: Response): Promise<void> => {
  try {
    const location: string = req.body.location;
    if (!location) {
      res.status(400).json({
        error: 'Please provide a location in the request body.',
      });
      return; // Ensure the function exits if location is not provided
    }

    const formattedPrompt: string = await formatPrompt(location);
    const result: any = await promptFunc(formattedPrompt);
    
    res.json({ 
      location: location, 
      prompt: formattedPrompt, 
      response: result 
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

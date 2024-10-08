import { glob } from "glob";

// Helper function to find the template file using glob
export const findTemplateFile = async (pattern: string): Promise<string> => {
  const files = await glob(pattern, { nodir: true });

  if (files.length === 0) {
    throw new Error(`No Template file found for pattern: ${pattern}`);
  }

  return files[0];
};

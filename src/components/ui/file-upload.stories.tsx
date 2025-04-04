import type { Meta, StoryObj } from "@storybook/react";
import { FileUploader, FileUploaderContent, FileUploaderItem, FileInput } from "./file-upload";
import { useState } from "react";

const meta: Meta<typeof FileUploader> = {
  title: "Components/FileUploader",
  component: FileUploader,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FileUploader>;

const Template = () => {
  const [files, setFiles] = useState<File[] | null>(null);

  return (
    <FileUploader
      value={files}
      onValueChange={setFiles}
      dropzoneOptions={{ maxFiles: 3, maxSize: 5 * 1024 * 1024 }}
    >
      <FileInput>
        <div className="p-4 border border-dashed rounded-lg">
          Drag and drop files here or click to upload
        </div>
      </FileInput>

      <FileUploaderContent>
        {files?.map((file, index) => (
          <FileUploaderItem key={index} index={index}>
            {file.name}
          </FileUploaderItem>
        ))}
      </FileUploaderContent>
    </FileUploader>
  );
};

export const Primary: Story = {
  render: () => <Template />,
};

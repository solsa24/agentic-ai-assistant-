import React, { useState } from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

const models = [
  { value: "gpt-4o", label: "GPT-4o (OpenAI)" },
  { value: "claude-3.5-sonnet", label: "Claude 3.5 Sonnet" },
];

const ModelSelector = () => {
  const [model, setModel] = useState(models[0].value);

  // TODO: Connect with ChatContext for global model selection

  return (
    <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
      <InputLabel>Model</InputLabel>
      <Select
        label="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      >
        {models.map((m) => (
          <MenuItem key={m.value} value={m.value}>
            {m.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ModelSelector;
import { Select } from "@chakra-ui/react";
import { FC } from "react";

interface SelectProviderProps {
  providers: string[];
  selectedProvider: string;
  setSelectedProvider: (text: string) => void;
}

const SelectProvider: FC<SelectProviderProps> = ({
  providers,
  selectedProvider,
  setSelectedProvider,
}) => {
  return (
    <Select
      width={"45%"}
      placeholder="Select Provider"
      size={"sm"}
      bg={"white"}
      color="gray.400"
      value={selectedProvider}
      onChange={(e) => setSelectedProvider(e.target.value)}
      sx={{
        "> option": {
          background: "white",
          color: "gray.400",
        },
        "& > option:hover": {
          background: "blue",
        },
      }}
    >
      {providers.map((provider, index) => (
        <option key={index} value={provider}>
          {provider}
        </option>
      ))}
    </Select>
  );
};

export default SelectProvider;

import { Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface ReleaseSelectorProps {
  onSelectDate: (date: string) => void;
}

const ReleaseSelector = ({ onSelectDate }: ReleaseSelectorProps) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const formatDate = (year: number, month: number) => {
    console.log(year, month);
    const date = new Date(year, month, 1);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    console.log(`${firstDay.toISOString().split("T")[0]}, ${lastDay.toISOString().split("T")[0]}`);
    return `${firstDay.toISOString().split("T")[0]},${lastDay.toISOString().split("T")[0]}`;
  };

  return (
    <HStack justifyContent="space-between">
      <HStack>
        {months.map((month, i) => (
          <Button
            isDisabled={i === selectedMonth}
            key={month}
            onClick={() => {
              setSelectedMonth(i);
              onSelectDate(formatDate(selectedYear, i));
            }}
            textDecor="underline"
            variant="link"
          >
            {month}
          </Button>
        ))}
      </HStack>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          <Box marginRight={3}>{selectedYear}</Box>
        </MenuButton>
        <MenuList>
          {Array.from({ length: 11 }, (_, i) => currentYear + 1 - i).map((year) => (
            <MenuItem
              key={year}
              onClick={() => {
                setSelectedYear(year);
                onSelectDate(formatDate(year, selectedMonth));
              }}
            >
              {year}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default ReleaseSelector;

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import { BR } from "country-flag-icons/react/1x1";

import styles from "./index.module.css";

const CustomSelect = ({ options, value, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find((option: any) => option.value === value);

  return (
    <div className={styles.customSelect}>
      <div className={styles.selectedOption} onClick={toggleDropdown}>
        <span className={styles.text}>{selectedOption.label}</span>
        <div className={styles.rightSideSelect}>
          <hr className={styles.divider} />
          <BR title="Brasil" className={styles.flagIcon} />
          <span className={styles.text}>{options.currency ?? "BRL"}</span>
          <div>
            {isOpen ? <TbChevronDown size={24} /> : <TbChevronDown size={24} />}
          </div>
        </div>
      </div>
      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map((option: any) => (
            <li
              className={styles.option}
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              <span>{option.label}</span>
              <div className={styles.icon}>
                {value === option.value ? <FaCheck /> : null}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CustomSelect;

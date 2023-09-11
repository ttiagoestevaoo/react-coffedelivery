import { Minus, Plus } from "phosphor-react";
import { InputNumberContainer, QuantityBtn } from "./style";

interface InputNumberProps {
    value: number
    onChange: (value: number) => void
}

export function InputNumber({value, onChange}: InputNumberProps) {
    const minValue = 1

    function handleChange(value: number) {
        if (value >= minValue) onChange(value)
    }

    return (
        <InputNumberContainer>
            <QuantityBtn disabled={value === minValue} onClick={() => handleChange(value - 1)}><Minus size={14} /></QuantityBtn>
            <span>{value}</span>
            <QuantityBtn onClick={() => handleChange(value + 1)}><Plus size={14} /></QuantityBtn>
        </InputNumberContainer>
    )
}
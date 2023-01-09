import React from 'react'
import { Input, Label } from './InputField.style'

export const InputField = ({ props, state, dispatch }) => {
    return (
            <Label htmlFor={props.label.name}> <p>{props.label.text}</p>
                <Input id={props.label.name}
                    onChange={e => dispatch({
                        type: props.input.id,
                        data: e.target.value.trim()
                    })}
                    type={props.input.type}
                    name={props.label.name}
                    placeholder={props.input.placeholder}
                    value={state[props.label.name]}
                />
            </Label>
    )
}




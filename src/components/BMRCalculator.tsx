import React, { useState } from 'react';
import bmr from 'harris-benedict-bmr';
import styled from "@emotion/styled";
import Icons from "@icons";

const BMRContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
`

const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  background: var(--theme-ui-colors-accent,#6166DC);
  color: var(--theme-ui-colors-background,#fafafa);
  height: 38px;
  font-weight: 600;
  transition: background 0.2s ease;
  border-radius: 4px;

  &:hover {
    color: var(--theme-ui-colors-accent,#6166DC);
    background: var(--theme-ui-colors-background,#fafafa);
    border: 2px solid var(--theme-ui-colors-accent,#6166DC);
  }

  &:disabled {
    background: rgb(115, 115, 125);
    pointer-events: none;
  }
`;

const Radio = styled.input`
  margin-right: 8px;
`;

const Span = styled.span`
  width: 100px;
  display: inline-block;
  font-weight: 600;
`;

const InputNumber = styled.input`
  width: calc(100% - 100px) !important;
`;

const RadioLabel = styled.label`
  margin: 4px 0 4px 8px;
  display: flex;
  align-items: center;
`;

const Legend = styled.legend`
  padding: 6px 0;
  font-weight: 600;
`;

const Form = styled.form`
  color: #3b4351;
  line-height: 24px;
  font-size: 16px;
  position: relative;
`;

const Result = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  background: lightblue;
  transition: height 1s ease;
  background: var(--theme-ui-colors-accent,#6166DC);
  color: var(--theme-ui-colors-background,#fafafa);
  box-shadow: 0px 20px 40px rgba(0,0,0,0.2);
  border-radius: 5px;
`;

const Label = styled.label`
  display: flex;
  margin: 6px 0;
`;

const Close = styled.span`
  position: absolute;
  cursor: pointer;
  top: 4px;
  right: 4px;
`

const BMRCalculator = () => {
  const [male, setMale] = useState(true);
  const [bmrResult, setBmr] = useState(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [imperial, setImperial] = useState(false);
  const disable = weight <= 0 || height <= 0 || age <= 0 || !weight || !age || !height;
  const onSubmit = (e) => {
    e.preventDefault();
    setBmr(Math.round(bmr({
      weight,
      height,
      age,
      isMale: male,
      useImperial: imperial,
      useMifflinJeor: true,
    })));
  }

  return (
    <Form style={{ width: 360, margin: '0 auto' }} onSubmit={onSubmit}>
      <fieldset onChange={e => { setMale(e.target.name === 'male') }}>
        <Legend>Gender</Legend>
        <RadioLabel>
          <Radio checked={male} type="radio" name="male" />
          Male
        </RadioLabel>
        <RadioLabel>
          <Radio checked={!male} type="radio" name="female" />
          Female
        </RadioLabel>
      </fieldset>
      <fieldset  onChange={e => { setImperial(e.target.name === 'imperial') }}>
        <Legend>Units</Legend>
        <RadioLabel>
          <Radio checked={!imperial} type="radio" name="metric" />
          Metric Units
        </RadioLabel>
        <RadioLabel>
          <Radio checked={imperial} type="radio" name="imperial" />
          US Units
        </RadioLabel>
      </fieldset>
      <Label>
        <Span>Age</Span>
        <InputNumber value={age} onChange={(e) => { setAge(parseInt(e.target.value)) }} type="number" min={0} />
      </Label>
      <Label>
        <Span>{`Weight (${!imperial ? 'kg' : 'lb'})`}</Span>
        <InputNumber value={weight} onChange={(e) => { setWeight(parseInt(e.target.value)) }} type="number" min={0} />
      </Label>
      <Label>
        <Span>{`Height (${!imperial ? 'cm' : 'in'})`}</Span>
        <InputNumber value={height} onChange={(e) => { setHeight(parseInt(e.target.value)) }} type="number" min={0} />
      </Label>
      <Button disabled={disable} type='submit'>Calculate</Button>
      <Result style={{ height: !!bmrResult ? '100%' : 0 }}>
        {!!bmrResult && (
          <>
            <BMRContainer>{`${bmrResult} Calories/day`}</BMRContainer>
            <Close role="button" onClick={() => {setBmr(null)}}><Icons.Ex fill="#ffffff" /></Close>
          </>
        )}
      </Result>
    </Form>
  );
}

export default BMRCalculator;

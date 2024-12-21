import React from 'react';
import Card from "../components/reusable/Card"
import { doctors } from '../constant/specialist';

function Specialist() {
  return (
    <div><Card data={doctors}/></div>
  )
}

export default Specialist
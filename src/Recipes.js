import React from 'react'
import style from './recipesty.module.css'

const recipes = ({title, cals, img, ingredients, cautions}) => {
  return (
    <div>
      <h2 className={style.recipe_name}>{title}</h2>
      <img className={style.imgsty} src={img} alt="not found"/>
      <p className={style.caloriez}>calories: {cals}</p>
      <ul className={style.ings}style={{listStyle: 'none'}}>
        ingredients:
        <br/>
        {ingredients.map(ing_obj =>(
          <li>{ing_obj.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default recipes;
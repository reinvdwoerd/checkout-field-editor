import React, { Component, PropTypes } from 'react'
import saveIcon from '../public/save.svg'
import '../public/CategoryList.css'
import Category from './Category'
import EditingCategory from './EditingCategory'
import CategoryListHeader from './CategoryListHeader'


export default function CategoriesHeader(props)
{
  return (
    <aside id='category-list'>
      <CategoryListHeader/>
      <div id="category-list-wrapper">
        {
          props.categories.map((category, i) =>

          props.editingCategory && props.currentTab == i
            ? <EditingCategory
              name={category.name}
              key={i}
              updateName={props.updateName}
              stopEditing={props.stopEditing}
              />
          : <Category
            i={i}
            key={i}
            active={props.currentTab == i}
            name={category.name}
            toggleEditing={props.toggleEditing}
            switchTab={props.switchTab}
            />
          )
        }
      </div>
    </aside>
)
}

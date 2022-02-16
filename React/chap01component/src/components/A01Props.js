import React from 'react';

function A01Props(props) { // props는 React가 주입해주는 참조 변수
  const { comp, name, age, ary, obj, onAdd, num, changeName } = props;
  return (
    <div>
      <h3>A01 Props Component</h3>

      <div>
        comp: {props.comp}<br />
        name: {props.name}<br />
        age: {props.age}<br />
        ary: {props.ary}<br />
        object: {props.obj.name} / {props.obj.age} <br />
        onAdd: {props.onAdd(10, 20)}

      </div>
      <hr />
      <div>
        comp: {comp}<br />
        name: {name}<br />
        age: {age}<br />
        ary: {ary}<br />
        object: {obj.name} / {obj.age} <br />
        onAdd: {onAdd(10, 20)} <br />
        num: {num} <br />
        <button className='btn btn-primary btn-sm ' onClick={changeName}>changeName</button>
        {/* changeName: {changeName('Yuri')} */}

      </div>
    </div>
  )
}

export default A01Props;
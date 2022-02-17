
import React, { useState } from 'react'
// let cnt = 1; -> 리렌더링 안됨.
function A04CreateDOM() {
    // let cnt = 1; -> 계속 리렌더링됨.
    const baseArray = ['NC', '두산', '엘지', 'KT', '키움'];

    const [baseObject, setBaseObject] = useState([
        { id: 1, team: 'NC', value: 'NC' },
        { id: 2, team: '두산', value: 'Doosan' },
        { id: 3, team: '엘지', value: 'LG' },
    ]);

    const [data, setData] = useState({
        teamOne: '',
        teamTwo: '',
        isChecked: false,
    });
    const changeTeam = (evt) => setData({ ...data, teamOne: evt.target.value })
    const showHide = () => setData({ ...data, isChecked: !data.isChecked })

    return (
        <div>
            <h3>A04 Make DOM</h3>

            SelectBox: {data.teamOne}<br />
            <select name="teamOne" className="form-control" onChange={changeTeam}>
                <option>선택해주세요</option>

                {/* 
                    {} 구문은 for, while, if 등의 제어문 구문은 기술 안됨.
                    map, filter는 가능. 이건 함수다.
                    map((item, index) => {})
                */}
                {baseArray.map((item, index) => <option key={index}>{item}</option>)}
            </select>

            SelectBox: {data.teamTwo}<br />
            <select name="teamTwo" className="form-control">
                <option value="">선택해주세요</option>
                {baseObject.map(item => {
                    return <option value={item.value} key={item.id}>{item.team}</option>
                })}

            </select>

            <table className="table">
                <thead>
                    <tr>
                        <th>NO</th><th>Team</th><th>Value</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

            {/* ||, && 연산자로도 사용한다. */}
            {/* 앞이 false면 뒤에 볼 필요도 없어서 렌더링 안함. */}
            {data.isChecked &&
                <div className="input-group">
                    <input type="text" className="form-control" />
                    <button className="btn btn-outline-primary btn-sm">ADD</button>
                </div>
            }

            <br />

            <button className="btn btn-outline-primary btn-sm" >ADD TEAM</button>
            <button className="btn btn-outline-primary btn-sm" onClick={showHide}>{data.isChecked ? 'HIDE' : 'SHOW'}</button>
        </div>
    )
}

export default A04CreateDOM

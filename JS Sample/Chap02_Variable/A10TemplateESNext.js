
console.log('---------------- Template Literals -----------------');
// 88, 89p.
let userName = 'NolBu';
let age = 30;
let address = 'Seoul';

console.log(userName + '님의 나이는 ' + age + '입니다.');
console.log(userName + '님은 ' + address + '에 거주합니다');
console.log(userName + '님의 나이는 ' + age + '입니다.\n' + userName + '님은 ' + address + '에 거주합니다');
console.log('');

// 보간법: 쓰면 쓰는대로 출력됨. 직관적임.
console.log(`${userName}님의 나이는 ${age}입니다.
    ${userName}님은 ${address}에 거주합니다.
`);

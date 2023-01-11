// 호텔 방 배정
// 문제 설명
// [본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

// "스노우타운"에서 호텔을 운영하고 있는 "스카피"는 호텔에 투숙하려는 고객들에게 방을 배정하려 합니다. 호텔에는 방이 총 k개 있으며, 각각의 방은 1번부터 k번까지 번호로 구분하고 있습니다. 처음에는 모든 방이 비어 있으며 "스카피"는 다음과 같은 규칙에 따라 고객에게 방을 배정하려고 합니다.

// 한 번에 한 명씩 신청한 순서대로 방을 배정합니다.
// 고객은 투숙하기 원하는 방 번호를 제출합니다.
// 고객이 원하는 방이 비어 있다면 즉시 배정합니다.
// 고객이 원하는 방이 이미 배정되어 있으면 원하는 방보다 번호가 크면서 비어있는 방 중 가장 번호가 작은 방을 배정합니다.
// 예를 들어, 방이 총 10개이고, 고객들이 원하는 방 번호가 순서대로 [1, 3, 4, 1, 3, 1] 일 경우 다음과 같이 방을 배정받게 됩니다.

// 원하는 방 번호	배정된 방 번호
// 1	1
// 3	3
// 4	4
// 1	2
// 3	5
// 1	6
// 전체 방 개수 k와 고객들이 원하는 방 번호가 순서대로 들어있는 배열 room_number가 매개변수로 주어질 때, 각 고객에게 배정되는 방 번호를 순서대로 배열에 담아 return 하도록 solution 함수를 완성해주세요.

// [제한사항]
// k는 1 이상 1012 이하인 자연수입니다.
// room_number 배열의 크기는 1 이상 200,000 이하입니다.
// room_number 배열 각 원소들의 값은 1 이상 k 이하인 자연수입니다.
// room_number 배열은 모든 고객이 방을 배정받을 수 있는 경우만 입력으로 주어집니다.
// 예를 들어, k = 5, room_number = [5, 5] 와 같은 경우는 방을 배정받지 못하는 고객이 발생하므로 이런 경우는 입력으로 주어지지 않습니다.

function solution(k, room_number) {
  let arrK = [];
  arrK.length = k;

  for (let i = 0; i < room_number.length; i++) {
    for (let j = 0; j < room_number.length; j++) {
      if (arrK[room_number[i] - 1] == undefined) {
        arrK[room_number[i] - 1] = room_number[i];
        console.log("arrK : ", arrK);
        break;
      } else {
        for (let l = j; l < room_number.length; l++) {
          if (arrK[l] == undefined) {
            console.log("arrK[l],j ", arrK[l], j);
            console.log(arrK.indexOf(arrK[room_number[l] - 1]));
            arrK[room_number[l] - 1] = room_number[l];
            break;
          }
        }
      }
    }
  }
  console.log("result : ", arrK);
  return;
}

solution(10, [1, 3, 4, 1, 3, 1]); // [1,3,4,2,5,8]

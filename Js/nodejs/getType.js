// 타입 확인 함수
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8,-1)
}
export function addMission(newMission) {
  return {
    type: "ADD_MISSION",
    newMission,
  };
}

export function finishMission(index) {
  return {
    type: "FINISH_MISSION",
    index,
  };
}

//export default { addMission, finishMission };

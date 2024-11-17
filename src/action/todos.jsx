export const create = (content) => {
  return {
    type: "create",
    content: content
  }
}

export const complete = (id) => {
  return {
    type: "complete",
    id: id
  }
}

export const undoComplete = (id) => {
  return {
    type: "undoComplete",
    id: id
  }
}

export const deleted = (id) => {
  return {
    type: "delete",
    id: id
  }
}
import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_SINGLE_PROJECT = 'GET_SINGLE_PROJECT'
const GET_PROJECTS = 'GET_PROJECTS'
/**
 * INITIAL STATE
 */
const initialState = {
  projects: [],
  singleProject: []
}

/**
 * ACTION CREATORS
 */
const getSingleProject = project => ({
  type: GET_SINGLE_PROJECT,
  payload: project
})
const getProjects = projects => ({type: GET_PROJECTS, payload: projects})
/**
 * THUNK CREATOR
 */
export const fetchSingleProject = projectId => {
  return async dispatch => {
    const res = await axios.get(`/api/projects/${projectId}`)
    const project = res.data
    const action = getSingleProject(project)
    dispatch(action)
  }
}

export const fetchProjects = () => {
  return async dispatch => {
    const res = await axios.get('/api/projects/')
    const projects = res.data
    const action = getProjects(projects)
    dispatch(action)
  }
}

/**
 * REDUCER
 */
const projectReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PROJECT:
      return {
        ...state,
        singleProject: action.payload
      }
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
    default:
      return state
  }
}

export default projectReducer

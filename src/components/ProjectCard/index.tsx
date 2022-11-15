
import { useTheme } from 'app/state/application/hooks'
import { useEffect } from 'react'

// @ts-ignore TYPE NEEDS FIXING
const ProjectCard = () => {
  const theme = useTheme()
  useEffect(() => {}, [theme])

  return (
    <div className="rounded-lg relative shadow-md bg-base-100">
      <a className="rounded-t-lg overflow-hidden cursor-pointer block w-full h-36">
        <img className="object-top" src="/snapshot3.png" alt="" />
      </a>
      <div className="box-border relative p-5 h-22">
        <div className="avatar absolute -top-12">
          <div className="w-16 rounded-2xl">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <h5>Project name</h5>
          <span className="opacity-50">512 X 512</span>
        </div>
        <div className="flex justify-between">
          <span>2022-11-12</span>
          <span className="opacity-50">12M / 10-31</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
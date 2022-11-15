import { useLingui } from "@lingui/react";
import ProjectCard from "app/components/ProjectCard";
import { Dropdown } from "flowbite-react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const { i18n } = useLingui();
  const { data, error } = useSWR("/api/people", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-base-300">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6">
          <label htmlFor="create-project-modal" className="flex justify-center box-border rounded-lg border-dashed border-2 border-base-content shadow-md bg-base-100 h-58 cursor-pointer">
            <div className="self-center text-center	">
              <label htmlFor="create-project-modal" className="btn btn-primary btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-2 block w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </label>
              <h1 className="text-3xl my-5">开始POP你的NFT</h1>
              <p className="flex text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-4 h-4 mr-1 self-center">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                所有POP的数据都会归属在每一个项目空间内独立管理</p>
            </div>
          </label>
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="create-project-modal" className="modal-toggle" />
          <label htmlFor="create-project-modal" className="modal cursor-pointer">
            <label className="modal-box relative flex flex-col" htmlFor="">
              <div className="form-control w-full max-w-xs self-center">
                <label className="label">
                  <span className="label-text">项目名称</span>
                </label>
                <input type="text" placeholder="请输入..." className="input input-bordered w-full max-w-xs" />
                <label className="label">
                  <span className="label-text">项目描述</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="请输入..."></textarea>
                <div className="modal-action self-center">
                  <label htmlFor="create-project-modal" className="btn btn-primary">提交</label>
                </div>
              </div>
            </label>
          </label>
          <ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard />
        </div>
      </div>
    </div>
  );
}

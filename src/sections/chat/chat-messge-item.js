export default function ChatMessageItem() {
  return (
    <div
      id="chat"
      className="flex flex-col mt-2 flex-col-reverse 	 space-y-3 mb-20 pb-3 "
    >
      <div className="w-max ml-auto break-all mt-2 mb-1 p-2   mr-5 flex flex-row flex-row-reverse">
        <img
          className="h-8 w-8 rounded-full "
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="mx-5">
          <p className="bg-purple-500 rounded-md text-sm text-white p-2 w-96">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
          <span className="text-xs text-gray-700 mt-5 ">08:00PM</span>
        </div>
      </div>

      <div className="other break-all mt-2  ml-5  float-none mr-auto flex">
        <img
          className="h-8 w-8 rounded-full "
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="mx-5">
          <p className="rounded-md p-2 text-sm border border-black  w-96">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
          <span className="text-xs text-gray-700 mt-5">08:00PM</span>
        </div>
      </div>
    </div>
  );
}

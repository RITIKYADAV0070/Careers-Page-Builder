import Careers from "../careers/page";

export default function Preview(props: any) {
  return (
    <>
      <div className="bg-yellow-100 text-sm text-center py-2">
        Preview Mode — Not Public
      </div>
      <Careers {...props} />
    </>
  );
}

import { getFeedbacks } from "@/utils/dbMethods/dbMethods";

export default async function FeedbackPage() {
  const feedbacks = await getFeedbacks();
  return (
    <div className="p-5">
      <ul className="flex flex-col gap-4">
        {feedbacks.map((f) => {
          return (
            <li
              className="border border-white rounded-lg p-4"
              key={f._id.toString()}
            >
              {f.message}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

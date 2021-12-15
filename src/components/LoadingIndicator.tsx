import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import "../css/LoadingIndicator.css";

export const LoadingIndicator = (): JSX.Element => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <>
      {promiseInProgress && (
        <div className="loading-indicator">
          <Loader
            type="ThreeDots"
            color="#6968ad"
            // secondaryColor="#789689"
            height="100"
            width="100"
            radius={20}
          />
        </div>
      )}
    </>
  );
};

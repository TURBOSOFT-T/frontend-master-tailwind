import ErrorBoundary from "./ErrorBoundary";


export default function DetailsErrorBoundary(props) {

    
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

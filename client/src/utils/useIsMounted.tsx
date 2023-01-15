import { useEffect, useRef } from "react";

// hook that checks if component is mounted
function useIsMounted() {
	const isMounted = useRef(false);

	useEffect(() => {
		isMounted.current = true;

		return () => {
			isMounted.current = false;
		};
	});

	return isMounted;
}

export default useIsMounted;

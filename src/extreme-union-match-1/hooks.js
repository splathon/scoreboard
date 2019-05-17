import { useEffect, useCallback, useRef } from 'react';
import { fetchAllCsv } from '../shared/utils';
import parser from './csv-parser';

const fetchData = async () => {
  const csv = await fetchAllCsv({
    base: { id: '1dko-lAxN6sisaf13kx8s2fvuyU6i3qt8oLUxM7H-tuM', gid: 0 },
    team: { id: '1dko-lAxN6sisaf13kx8s2fvuyU6i3qt8oLUxM7H-tuM', gid: 655221116 },
  });
  return parser(csv);
};

/**
 * if main
 *   do nothing, just wait update from preview
 *
 * if preview
 *   load initial data
 *   start polling data
 */
export const useFetch = (onFetch, isPreview) => {
  if (!isPreview) {
    // do nothing in main
    return;
  }

  const fetchViewData = useCallback(async () => {
    const csv = await fetchData();
    onFetch(csv);
  }, [onFetch]);

  useEffect(() => {
    // initial
    (async () => await fetchViewData())();

    const timer = setInterval(fetchViewData, 5000);
    return () => clearInterval(timer);
  }, [fetchViewData]);
};

/**
 * if main
 *   wait update from preview
 *
 * if preview
 *   return handler to update main
 *
 */
export const useBroadcastChannel = (eventName, isPreview, onUpdate) => {
  const chRef = useRef(new BroadcastChannel(eventName));

  useEffect(() => {
    if (isPreview) {
      // do nothing in preview
      return;
    }

    // in main: wait message from preview
    chRef.current.onmessage = ({ data }) => {
      if (data.type === 'update') {
        onUpdate(data.payload);
      }
    };

    return () => chRef.current.onmessage = null;
  }, [chRef, onUpdate, isPreview]);

  return viewData =>
    chRef.current.postMessage({ type: 'update', payload: viewData });
};

import { useEffect, useCallback, useRef } from 'react';
import { fetchAllCsv } from '../shared/utils';
import parser from './csv-parser';

const fetchData = async () => {
  try {
    const csv = await fetchAllCsv({
      base: { id: '1EbCqfd0QWxyR0ONRDnMtKrE3m10HH-AI43joTQ8P6jQ', gid: 0 },
      team: { id: '1EbCqfd0QWxyR0ONRDnMtKrE3m10HH-AI43joTQ8P6jQ', gid: 655221116 },
    });
    return parser(csv);
  } catch(err) {
    return err;
  }
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
    const viewData = await fetchData();
    console.log('fetchViewData()', viewData);
    onFetch(viewData);
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
        console.log('on:update()', data.payload);
        onUpdate(data.payload);
      }
    };

    return () => chRef.current.onmessage = null;
  }, [chRef, onUpdate, isPreview]);

  return viewData => {
    console.log('send:update()', viewData);
    chRef.current.postMessage({ type: 'update', payload: viewData });
  };
};

import React, { useEffect } from 'react';

export function LifecycleDemo() {
	//didMount, didUpdate , willUnmount,
  useEffect(() => {
    console.log('render!');
    return () => console.log('unmounting...');
  })

  return <div>I'm a lifecycle demo</div>;
}
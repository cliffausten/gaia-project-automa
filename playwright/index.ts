// Import styles, initialize component theme here.
// import '../src/common.css';
import { enableExternalSource } from "solid-js";
import { Reaction } from "mobx";

// register MobX as an external source
let id = 0;
enableExternalSource((fn, trigger) => {
  const reaction = new Reaction(`externalSource@${++id}`, trigger);
  return {
    track: (x) => {
      let next;
      reaction.track(() => (next = fn(x)));
      return next;
    },
    dispose: () => reaction.dispose(),
  };
});

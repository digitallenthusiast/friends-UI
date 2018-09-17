import React from 'react';
// You can import from the global component (you will need to include the css file dist/react-bulma-components.min.css)
import { Columns } from 'react-bulma-components';

// You can also include the js that also bundles the css (do not work with server-side rendering)
import { Columns } from 'react-bulma-components/full';

// [RECOMENDED] Or import only the components you will use (this will reduce the total bundle size)
// If you use this approach and want to use the global Bulma styles, import react-bulma-components/src/index.sass and configure webpack to handle sass files
import Columns from 'react-bulma-components/lib/components/columns';

export default () => (
  <Columns>
      <Columns.Column>
        First Column
      </Columns.Column>
      <Columns.Column>
        Second Column
      </Columns.Column>
      <Columns.Column>
        Third Column
      </Columns.Column>
      <Columns.Column>
        Fourth Column
      </Columns.Column>
    </Columns>
);
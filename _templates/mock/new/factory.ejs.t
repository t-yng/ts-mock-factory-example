---
to: test/helpers/mock/<%= outputFileName %>
---
<%_
  const importedInterfaces = interfaces.map(interface => h.capitalize(interface)).join(', ')
_%>
import { <%= importedInterfaces  %> } from '@/<%= inputFilePath %>';

<%_ for(let i=0; i<interfaces.length; i++) { _%>
<%_
  const interface = interfaces[i];
  const Interface = h.capitalize(interface);
  const mockData = mocks[interface];
_%>
export const create<%= Interface %> = (<%= interface %>?: Partial<<%= Interface %>>): <%= Interface %> => {
  const default<%= Interface %>: <%= Interface %> = <%- mockData %>

  return {
    ...default<%= Interface %>,
    ...<%= interface %>,
  };
};
<%_ } _%>

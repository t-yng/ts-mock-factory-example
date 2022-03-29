---
to: test/helpers/mock/<%= getFileName(file) %>.ts
---
<%_
  const importedInterfaces = interfaces.map(interface => h.capitalize(interface)).join(', ')
_%>
import { <%= importedInterfaces  %> } from '@/models/<%= getFileName(file) %>';

<%_ for(let i=0; i<interfaces.length; i++) { _%>
<%_
  const interface = interfaces[i];
  const Interface = h.capitalize(interface);
  const mockData = createMockData(file, interface);
_%>
export const create<%= Interface %> = (<%= interface %>?: Partial<<%= Interface %>>): <%= Interface %> => {
  const default<%= Interface %>: <%= Interface %> = <%- mockData %>

  return {
    ...default<%= Interface %>,
    ...<%= interface %>,
  }
}
<%_ } _%>




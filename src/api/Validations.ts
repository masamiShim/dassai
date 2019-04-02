/* eslint-disabled */
const pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
  required: (value: string) => !!value || 'Required.',
  counter: (value: string, length: number) => value.length <= length || `Max ${length} characters`,
  email: (value: string) => {
    return pattern.test(value) || 'Invalid e-mail.';
  },
};


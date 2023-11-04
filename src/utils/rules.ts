export const rules = {
    // function for rules validation input
    required: (v: any) => {
        return !!v || 'Field is required'
     },
    email(v: any) {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return re.test(v) || 'Please input valid email address'
    }
 }
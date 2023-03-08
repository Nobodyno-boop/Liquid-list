
const isProd = process.env.NODE_ENV === 'production'


export const url = (str) => {
    const base = isProd ? '/liquid-list/' : '/'
    if(str.startsWith("/")){
        str = str.substring(1)
    }

    return `${base}${str}`
}

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'o')
    .replace(/å/g, 'a')
    .replace(/[^a-z0-9\s-]/g, '')   
    .replace(/\s+/g, '-')          
    .replace(/-+/g, '-')            
    .replace(/^-|-$/g, '');         
}

const rawImporters = import.meta.glob<string>('../assets/images/*.png', {
    query: '?url',
    import: 'default'
});

export const imageImporters: Record<string, () => Promise<string>> = Object.fromEntries(
    Object.entries(rawImporters).map(([path, importer]) => {
        const filename = path.split('/').pop()!;
        return [filename, importer];
    })
);

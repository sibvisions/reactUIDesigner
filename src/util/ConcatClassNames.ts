/**
 * Returns the given classnames as one string separated by whitespaces.
 * @param classNames - the given classnames
 */
export function concatClassnames(...classNames: (string | null | undefined)[]) {
    return classNames.filter(Boolean).join(' ');
}
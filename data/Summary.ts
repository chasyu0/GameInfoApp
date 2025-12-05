export const summarize = (text?: string, maxLength = 60): string => {
    if (!text) return "No summary available";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
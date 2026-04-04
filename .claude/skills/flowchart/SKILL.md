---
name: flowchart
description: Generate a Mermaid flowchart diagram. Use when user asks for a flowchart, diagram, flow, תרשים זרימה, or visualization of a process.
argument-hint: [topic or process to diagram]
---

The user wants a Mermaid flowchart. Their request: $ARGUMENTS

Generate a detailed, visually rich Mermaid flowchart using `flowchart TD` syntax.

Rules:
- Use emojis in node labels to make it visual and engaging
- Use `{}` for decisions, `[]` for steps, `([])` for start/end
- Group related nodes with color via `style` declarations
- Use subgraphs for logical groupings when the topic is complex
- Add `&` to join parallel branches back together
- Include a feedback loop (e.g. retry/fix path) when relevant
- Make it comprehensive — at least 15-20 nodes
- Write node labels in the same language the user used

Output ONLY the fenced mermaid code block, nothing else before or after.

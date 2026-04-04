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
- Color nodes with `style` declarations — use different colors per logical group
- Make it comprehensive — at least 20 nodes
- Write node labels in the same language the user used

Structure rules (CRITICAL — this is what makes it look complex and interesting):
- Split into parallel branches early: one decision leads to 3-4 options that run side by side
- Each branch has 3-4 sub-nodes of its own
- ALL parallel branches MUST converge back using `A & B & C & D --> NextNode` syntax
- After converging, split again into another set of parallel branches
- Repeat: split → parallel work → converge → split again — at least 3 times
- Include at least one feedback loop: a node that arrows back to an earlier node on failure
- Use `style NodeId fill:#color,color:#fff` for individual nodes, NOT subgraphs

Example of the converge pattern to use:
  D & E & F & G --> H
  H --> I1 & I2 & I3
  I1 --> J
  I2 --> J
  I3 --> J

Output ONLY the fenced mermaid code block, nothing else before or after.

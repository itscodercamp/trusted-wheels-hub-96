# AI Rules for TrustedVehicles Application

This document outlines the core technologies used in the TrustedVehicles application and provides guidelines for using specific libraries and tools.

## Tech Stack Overview

*   **Frontend Framework**: React
*   **Language**: TypeScript
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **UI Component Library**: shadcn/ui (built on Radix UI)
*   **Routing**: React Router DOM
*   **State Management / Data Fetching**: Tanstack Query
*   **Icons**: Lucide React
*   **Form Management & Validation**: React Hook Form with Zod
*   **Toast Notifications**: Sonner

## Library Usage Guidelines

To maintain consistency and best practices, please adhere to the following rules when developing:

*   **React**: Use React for all UI component development.
*   **TypeScript**: Always use TypeScript for type safety and improved code quality.
*   **React Router DOM**: Manage all client-side routing within `src/App.tsx`.
*   **Tailwind CSS**: All styling should be implemented using Tailwind CSS utility classes. Avoid custom CSS files unless absolutely necessary for global styles (e.g., `src/index.css`).
*   **shadcn/ui**: Utilize components from `shadcn/ui` for common UI elements.
    *   **Do NOT modify `src/components/ui/` files directly.** If a `shadcn/ui` component needs customization beyond its props, create a new component in `src/components/` that wraps or extends the `shadcn/ui` component.
*   **Lucide React**: Use icons exclusively from the `lucide-react` library.
*   **Tanstack Query**: For fetching, caching, and synchronizing server state in your React components.
*   **React Hook Form & Zod**: Use `react-hook-form` for managing form state and validation, and `zod` for schema-based validation.
*   **Sonner**: For displaying toast notifications to the user.
*   **File Structure**:
    *   Place main application pages in `src/pages/`.
    *   Place reusable UI components in `src/components/`.
    *   Keep utility functions in `src/lib/` or `src/utils/`.
    *   Keep custom React hooks in `src/hooks/`.
*   **Responsiveness**: Always design and implement components with responsiveness in mind, utilizing Tailwind's responsive utilities.
*   **Simplicity**: Prioritize simple, elegant solutions. Avoid over-engineering.
*   **Completeness**: Ensure all features are fully functional and complete; avoid partial implementations or TODO comments.
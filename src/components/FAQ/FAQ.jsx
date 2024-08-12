import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as RouterLink } from "react-router-dom";

const FAQ = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Función para detectar etiquetas <a> en el contenido
  const containsAnchorTag = (content) => {
    return /<a\s+[^>]*>(.*?)<\/a>/.test(content);
  };

  // Render content with links as HTML
  const renderContentAsHTML = (content) => {
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    let parts = [];
    let lastIndex = 0;

    content.replace(linkRegex, (match, linkText, linkUrl, index) => {
      if (index > lastIndex) {
        parts.push(content.substring(lastIndex, index));
      }
      lastIndex = index + match.length;

      const isExternal = linkUrl.startsWith("http");
      parts.push(
        isExternal
          ? `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">${linkText}</a>`
          : `<a href="${linkUrl}" style="color: blue; text-decoration: underline;">${linkText}</a>`
      );
    });

    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    return parts.join("");
  };

  // Render content with links as React components
  const renderContentAsReact = (content) => {
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    let parts = [];
    let lastIndex = 0;

    content.replace(linkRegex, (match, linkText, linkUrl, index) => {
      if (index > lastIndex) {
        parts.push(content.substring(lastIndex, index));
      }
      lastIndex = index + match.length;

      const isExternal = linkUrl.startsWith("http");
      parts.push(
        <React.Fragment key={index}>
          {isExternal ? (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {linkText}
            </a>
          ) : (
            <RouterLink
              to={linkUrl}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {linkText}
            </RouterLink>
          )}
        </React.Fragment>
      );
    });

    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    return parts;
  };

  // Render content based on the presence of <a> tag
  const renderContent = (content) => {
    if (containsAnchorTag(content)) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: renderContentAsHTML(content) }}
        />
      );
    } else {
      return renderContentAsReact(content);
    }
  };

  return (
    <Box width="100%">
      <Accordion
        style={{
          border: "1px solid black",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          width: "100%",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            backgroundColor: "#00673D",
            color: "white",
            minHeight: 60,
            margin: 0,
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "white", color: "black" }}>
          <Typography component="div">{renderContent(content)}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

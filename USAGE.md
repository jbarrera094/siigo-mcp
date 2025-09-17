# Siigo MCP Server Usage

## Quick Start

### 1. Install
```bash
npm install -g siigo-mcp-server
```

### 2. Configure Environment
Create a `.env` file or set environment variables:
```bash
export SIIGO_USERNAME="your_username"
export SIIGO_ACCESS_KEY="your_access_key"
```

### 3. Run the Server
```bash
siigo-mcp
```

## MCP Client Configuration

### Claude Desktop Configuration
Add to your Claude Desktop config file:

**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Linux**: `~/.config/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "siigo": {
      "command": "siigo-mcp",
      "env": {
        "SIIGO_USERNAME": "your_username",
        "SIIGO_ACCESS_KEY": "your_access_key"
      }
    }
  }
}
```

### Other MCP Clients
For other MCP clients, use:
- **Command**: `siigo-mcp`
- **Transport**: stdio
- **Environment**: Set `SIIGO_USERNAME` and `SIIGO_ACCESS_KEY`

## Available Tools

The server provides 40+ tools for Siigo API integration:

- **Products**: `siigo_get_products`, `siigo_create_product`, etc.
- **Customers**: `siigo_get_customers`, `siigo_create_customer`, etc.  
- **Invoices**: `siigo_get_invoices`, `siigo_create_invoice`, etc.
- **And many more...**

## Example Commands

### Get All Products
```
Use the siigo_get_products tool to list all products
```

### Create a Customer
```
Use siigo_create_customer with customer data including name, identification, address, phones, and contacts
```

### Generate Invoice
```
Use siigo_create_invoice with document type, customer, items, and payment information
```

For detailed API documentation, see the main README.md file.
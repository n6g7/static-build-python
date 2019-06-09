# static-build-python

now.sh builder that supports pip dependencies

Example `now.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "static-build-python"
    }
  ]
}

```

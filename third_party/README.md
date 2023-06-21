Please unpack the EDSDK v12.34.56 as `EDSDKv123456X/` into this folder where 'X' should be W for windows and M for mac.

Current configured version:
- 13.15.20

To try other versions, edit `binding.gyp` and change the edsdk_version variable.

EDSDK v13.14.40+ has an error in `EDSDKTypes.h` that triggers a conflict.
Change the "ObjectFormat Code (line ~865-873)" to:

```cpp
typedef enum
{
    kEdsObjectFormat_Unknown   = 0x00000000,
    kEdsObjectFormat_Jpeg      = 0x3801,
    kEdsObjectFormat_CR2       = 0xB103,
    kEdsObjectFormat_MP4       = 0xB982,
    kEdsObjectFormat_CR3       = 0xB108,
    kEdsObjectFormat_HEIF_CODE = 0xB10B,
} EdsObjectFormat;
```

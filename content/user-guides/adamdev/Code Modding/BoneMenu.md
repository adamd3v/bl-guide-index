BoneMenu is an integral part to BoneLib, in which it allows mod developers to create a simple menu with ease. You can create buttons that call functions, and other elements that can change things like integers or floats.

## Your First Page
To create a page, you have to create one that is parented to the **root**. The **root** page is the first ever page that is created by BoneLib, and serves as the "entry point" for all BoneMenu pages.

```cs
Page myPage = Page.Root.CreatePage("My Page", Color.white, maxElements: 8, createLink: true);
```

This will create a page with ``maxElements``, which means that it will split into another page if you created more than what you set. 

A **link** is also made to the page. **Links** are function elements that, when pressed, take you to the page. 

``createLink`` is always on by default if you choose not to set it, but you can optionally set it to false if you want more control over how the links are created between pages.
## Function Elements and Arrays
Picture this: you want to create a bunch of function elements on a page so you can change your custom HUD. What kind of code would you have to write for it to work?
```cs
for (int i = 0; i < HUDManager.NumHuds; i++)
{
	int currentIndex = i;
	string name = HUDManager.HudNames[currentIndex];
	page.CreateFunction(name, Color.white, () => HUDManager.SelectHUD(name));
}
```
<!--
# Update the Meta Field When the Input's Content Changes
 -->
# 入力コントロールの変更でメタフィールドを更新する

<!--
The last step in the journey is to update the meta field when the input content changes. To do that, you'll use another utility from the `@wordpress/data` package, [useDispatch](/packages/data/README.md#usedispatch). These utilities are also known as _hooks_.

`withDispatch` works similarly to `withSelect`. It takes two functions, the first returns an object with data, and the second takes that data object as input and returns a new UI component. Let's see how to use it:
 -->
最後のステップでは入力コンテンツが変更された際にメタフィールドを更新します。これには `@wordpress/data` パッケージから別のユーティリティ [useDispatch](https://developer.wordpress.org/block-editor/packages/packages-data/#usedispatch) を使用します。

<!--
`withDispatch` は `withSelect` と同様に動作し、2つの関数を取ります。最初の関数はデータのオブジェクトを返し、2番めの関数はそのデータオブジェクトを引数として取り新しい UI コンポーネントを返します。以下の例を参照してください。
 -->
<!--
The `useDispatch` takes store name as its only argument and returns methods that you can use to update the store.
 -->
`useDispatch` は、唯一の引数としてストア名を取り、ストアの更新に利用可能なメソッドを返します。

```js
( function ( wp ) {
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editPost.PluginSidebar;
	var el = wp.element.createElement;
	var Text = wp.components.TextControl;
	var useSelect = wp.data.useSelect;
	var useDispatch = wp.data.useDispatch;

	var MetaBlockField = function ( props ) {
		var metaFieldValue = useSelect( function ( select ) {
			return select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'sidebar_plugin_meta_block_field' ];
		}, [] );

		var editPost = useDispatch( 'core/editor' ).editPost;

		return el( Text, {
			label: 'Meta Block Field',
			value: metaFieldValue,
			onChange: function ( content ) {
				editPost( {
					meta: { sidebar_plugin_meta_block_field: content },
				} );
			},
		} );
	};

	registerPlugin( 'my-plugin-sidebar', {
		render: function () {
			return el(
				PluginSidebar,
				{
					name: 'my-plugin-sidebar',
					icon: 'admin-post',
					title: 'My plugin sidebar',
				},
				el(
					'div',
					{ className: 'plugin-sidebar-content' },
					el( MetaBlockField )
				)
			);
		},
	} );
} )( window.wp );
```
<!--
Here's how it changed from the previous section:

-   The component now use `editPost` function returned by `useDispatch` hook. These functions are also known as _actions_.
-   By calling `editPost` every time the user types something within the input control, we're effectively updating the editor store on each key stroke.

Copy this new code to the JavaScript file, load the sidebar and see how the input value gets updated as you type. You may want to check that the internal data structures are updated as well. Type something in the input control, and execute the following instruction in your browser's console:
 -->
前のセクションからコードは以下のように変わりました。

<!--
* 新しい関数 `mapDispatchToProps` を追加しました。この関数は `withDispatch` に渡されます。`dispatch` を引数として取り、エディターの内部データ構造を更新する関数を含むオブジェクトを返します。これらの関数は _アクション_ としても知られます。
* ユーザーが入力コントロール内で何か入力するたびに `setMetaFieldValue` を呼ぶことで、各キーストロークごとにエディターストアを効果的に更新しています。
* `MetaBlockField` コンポーネントの `props` 引数には `mapSelectToProps` から渡されたデータと `mapDispatchToProps` から渡されたアクションが含まれます。
 -->
* コンポーネントは `useDispatch` フックから返された `editPost` 関数を使用しています。この関数はまた _アクション_ としても呼ばれます。
* ユーザーが入力コントロール内で何か入力するたびに `editPost` を呼ぶことで、各キーストロークごとにエディターストアを効果的に更新しています。

この新しいコードを JavaScript ファイルにコピーしてサイドバーを再ロードし、タイプするたびに入力値が更新されることを確認してください。内部データ構造が更新されることも確認してください。確認には入力コントロールで何か入力し、次の命令をブラウザーのコンソールで実行します。

```js
wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[
	'sidebar_plugin_meta_block_field'
];
```

<!--
The message displayed should be what you typed in the input.

Now, after doing some changes, hit the "Save draft" button or publish the post. Then, reload the editor page. The browser has now new content, fresh from the database. You want to confirm that what you typed was stored properly in the database, and has been reloaded in the current post data structure. Open the sidebar and make sure the input control is initialized with the last value you typed.

One last check. At this point, because you haven't edited the input yet, the current post and the edited attributes should be the same. Confirm that by executing this code in your browser's console:
 -->
入力コントロールにタイプしたメッセージが表示されるはずです。

何文字か入力したら「下書き保存」または「公開する」をクリックし、エディターページをリロードしてください。ブラウザーは新しいコンテンツを開き、データベースから更新します。タイプした文字列がデータベースに正しく保存され、現在の投稿データ構造にリロードされたことを確認します。サイドバーを開き、入力コントロールがタイプした最後の値で初期化されることを確認してください。

最後のチェックです。この時点ではまだ入力を編集していませんので、現在の投稿と編集された属性は同じはずです。次のコードをブラウザーのコンソールで実行し確認してください。

```js
wp.data.select( 'core/editor' ).getCurrentPost()[ 'meta' ][
	'sidebar_plugin_meta_block_field'
];
wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[
	'sidebar_plugin_meta_block_field'
];
```
<!--
This is it! You now have a custom sidebar that updates `post_meta` contents.
 -->
以上です !  `post_meta` コンテンツを更新するカスタムサイドバーを作成しました。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/sidebar-tutorial/plugin-sidebar-5-update-meta.md)
